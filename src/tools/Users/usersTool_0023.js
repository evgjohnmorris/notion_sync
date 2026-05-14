/**
 * Generated Tool: usersTool_0023
 * Domain: Users
 * ID: 0023
 */
exports.usersTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0023:', error);
    throw error;
  }
};
