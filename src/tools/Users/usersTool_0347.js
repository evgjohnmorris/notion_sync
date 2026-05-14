/**
 * Generated Tool: usersTool_0347
 * Domain: Users
 * ID: 0347
 */
exports.usersTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0347:', error);
    throw error;
  }
};
