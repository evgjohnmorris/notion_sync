/**
 * Generated Tool: usersTool_0788
 * Domain: Users
 * ID: 0788
 */
exports.usersTool_0788 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0788:', error);
    throw error;
  }
};
