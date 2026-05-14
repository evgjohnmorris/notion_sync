/**
 * Generated Tool: usersTool_0393
 * Domain: Users
 * ID: 0393
 */
exports.usersTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0393:', error);
    throw error;
  }
};
