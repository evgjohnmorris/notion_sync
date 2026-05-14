/**
 * Generated Tool: usersTool_0793
 * Domain: Users
 * ID: 0793
 */
exports.usersTool_0793 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0793:', error);
    throw error;
  }
};
