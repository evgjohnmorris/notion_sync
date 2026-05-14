/**
 * Generated Tool: usersTool_0632
 * Domain: Users
 * ID: 0632
 */
exports.usersTool_0632 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0632:', error);
    throw error;
  }
};
