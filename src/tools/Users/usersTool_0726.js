/**
 * Generated Tool: usersTool_0726
 * Domain: Users
 * ID: 0726
 */
exports.usersTool_0726 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0726:', error);
    throw error;
  }
};
