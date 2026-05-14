/**
 * Generated Tool: usersTool_0660
 * Domain: Users
 * ID: 0660
 */
exports.usersTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0660:', error);
    throw error;
  }
};
