/**
 * Generated Tool: usersTool_0861
 * Domain: Users
 * ID: 0861
 */
exports.usersTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0861:', error);
    throw error;
  }
};
