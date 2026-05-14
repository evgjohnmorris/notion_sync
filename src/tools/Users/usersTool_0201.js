/**
 * Generated Tool: usersTool_0201
 * Domain: Users
 * ID: 0201
 */
exports.usersTool_0201 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0201:', error);
    throw error;
  }
};
