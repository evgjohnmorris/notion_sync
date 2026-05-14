/**
 * Generated Tool: usersTool_0581
 * Domain: Users
 * ID: 0581
 */
exports.usersTool_0581 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0581:', error);
    throw error;
  }
};
