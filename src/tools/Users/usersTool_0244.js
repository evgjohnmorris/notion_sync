/**
 * Generated Tool: usersTool_0244
 * Domain: Users
 * ID: 0244
 */
exports.usersTool_0244 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0244:', error);
    throw error;
  }
};
