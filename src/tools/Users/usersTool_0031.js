/**
 * Generated Tool: usersTool_0031
 * Domain: Users
 * ID: 0031
 */
exports.usersTool_0031 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0031:', error);
    throw error;
  }
};
