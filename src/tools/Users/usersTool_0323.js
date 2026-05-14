/**
 * Generated Tool: usersTool_0323
 * Domain: Users
 * ID: 0323
 */
exports.usersTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0323:', error);
    throw error;
  }
};
