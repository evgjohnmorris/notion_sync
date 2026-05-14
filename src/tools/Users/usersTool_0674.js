/**
 * Generated Tool: usersTool_0674
 * Domain: Users
 * ID: 0674
 */
exports.usersTool_0674 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0674:', error);
    throw error;
  }
};
