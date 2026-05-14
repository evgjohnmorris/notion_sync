/**
 * Generated Tool: usersTool_0366
 * Domain: Users
 * ID: 0366
 */
exports.usersTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0366:', error);
    throw error;
  }
};
