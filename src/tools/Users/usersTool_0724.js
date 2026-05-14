/**
 * Generated Tool: usersTool_0724
 * Domain: Users
 * ID: 0724
 */
exports.usersTool_0724 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0724:', error);
    throw error;
  }
};
