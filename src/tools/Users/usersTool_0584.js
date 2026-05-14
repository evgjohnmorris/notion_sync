/**
 * Generated Tool: usersTool_0584
 * Domain: Users
 * ID: 0584
 */
exports.usersTool_0584 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0584:', error);
    throw error;
  }
};
