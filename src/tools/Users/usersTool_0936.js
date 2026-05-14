/**
 * Generated Tool: usersTool_0936
 * Domain: Users
 * ID: 0936
 */
exports.usersTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0936:', error);
    throw error;
  }
};
