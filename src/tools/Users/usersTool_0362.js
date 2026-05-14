/**
 * Generated Tool: usersTool_0362
 * Domain: Users
 * ID: 0362
 */
exports.usersTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0362:', error);
    throw error;
  }
};
