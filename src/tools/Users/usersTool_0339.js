/**
 * Generated Tool: usersTool_0339
 * Domain: Users
 * ID: 0339
 */
exports.usersTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0339:', error);
    throw error;
  }
};
