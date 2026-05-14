/**
 * Generated Tool: usersTool_0425
 * Domain: Users
 * ID: 0425
 */
exports.usersTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0425:', error);
    throw error;
  }
};
