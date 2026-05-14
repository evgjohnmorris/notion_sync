/**
 * Generated Tool: usersTool_0999
 * Domain: Users
 * ID: 0999
 */
exports.usersTool_0999 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0999:', error);
    throw error;
  }
};
