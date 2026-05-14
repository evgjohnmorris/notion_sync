/**
 * Generated Tool: usersTool_0965
 * Domain: Users
 * ID: 0965
 */
exports.usersTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0965:', error);
    throw error;
  }
};
