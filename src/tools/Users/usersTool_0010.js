/**
 * Generated Tool: usersTool_0010
 * Domain: Users
 * ID: 0010
 */
exports.usersTool_0010 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0010:', error);
    throw error;
  }
};
