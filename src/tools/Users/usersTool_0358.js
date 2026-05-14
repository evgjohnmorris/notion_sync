/**
 * Generated Tool: usersTool_0358
 * Domain: Users
 * ID: 0358
 */
exports.usersTool_0358 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0358:', error);
    throw error;
  }
};
