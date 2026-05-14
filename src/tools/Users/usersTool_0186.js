/**
 * Generated Tool: usersTool_0186
 * Domain: Users
 * ID: 0186
 */
exports.usersTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0186:', error);
    throw error;
  }
};
