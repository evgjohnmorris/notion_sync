/**
 * Generated Tool: usersTool_0594
 * Domain: Users
 * ID: 0594
 */
exports.usersTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0594:', error);
    throw error;
  }
};
