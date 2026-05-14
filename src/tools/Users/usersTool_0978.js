/**
 * Generated Tool: usersTool_0978
 * Domain: Users
 * ID: 0978
 */
exports.usersTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0978:', error);
    throw error;
  }
};
