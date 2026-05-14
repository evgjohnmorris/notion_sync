/**
 * Generated Tool: usersTool_0859
 * Domain: Users
 * ID: 0859
 */
exports.usersTool_0859 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0859:', error);
    throw error;
  }
};
