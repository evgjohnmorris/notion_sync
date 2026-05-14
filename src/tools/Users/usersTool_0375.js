/**
 * Generated Tool: usersTool_0375
 * Domain: Users
 * ID: 0375
 */
exports.usersTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0375:', error);
    throw error;
  }
};
