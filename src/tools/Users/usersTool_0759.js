/**
 * Generated Tool: usersTool_0759
 * Domain: Users
 * ID: 0759
 */
exports.usersTool_0759 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0759:', error);
    throw error;
  }
};
