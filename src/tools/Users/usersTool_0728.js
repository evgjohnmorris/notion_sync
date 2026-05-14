/**
 * Generated Tool: usersTool_0728
 * Domain: Users
 * ID: 0728
 */
exports.usersTool_0728 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0728:', error);
    throw error;
  }
};
