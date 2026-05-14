/**
 * Generated Tool: usersTool_0643
 * Domain: Users
 * ID: 0643
 */
exports.usersTool_0643 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0643:', error);
    throw error;
  }
};
