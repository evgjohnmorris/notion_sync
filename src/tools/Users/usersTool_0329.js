/**
 * Generated Tool: usersTool_0329
 * Domain: Users
 * ID: 0329
 */
exports.usersTool_0329 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0329:', error);
    throw error;
  }
};
