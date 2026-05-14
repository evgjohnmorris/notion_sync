/**
 * Generated Tool: usersTool_0664
 * Domain: Users
 * ID: 0664
 */
exports.usersTool_0664 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0664:', error);
    throw error;
  }
};
