/**
 * Generated Tool: usersTool_0026
 * Domain: Users
 * ID: 0026
 */
exports.usersTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0026:', error);
    throw error;
  }
};
