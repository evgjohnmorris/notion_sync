/**
 * Generated Tool: usersTool_0567
 * Domain: Users
 * ID: 0567
 */
exports.usersTool_0567 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0567:', error);
    throw error;
  }
};
