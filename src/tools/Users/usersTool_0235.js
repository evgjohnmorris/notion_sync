/**
 * Generated Tool: usersTool_0235
 * Domain: Users
 * ID: 0235
 */
exports.usersTool_0235 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0235:', error);
    throw error;
  }
};
