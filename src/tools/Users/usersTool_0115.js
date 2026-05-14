/**
 * Generated Tool: usersTool_0115
 * Domain: Users
 * ID: 0115
 */
exports.usersTool_0115 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0115:', error);
    throw error;
  }
};
