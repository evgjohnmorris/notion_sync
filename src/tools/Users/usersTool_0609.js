/**
 * Generated Tool: usersTool_0609
 * Domain: Users
 * ID: 0609
 */
exports.usersTool_0609 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0609:', error);
    throw error;
  }
};
