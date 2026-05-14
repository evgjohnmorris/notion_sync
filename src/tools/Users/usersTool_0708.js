/**
 * Generated Tool: usersTool_0708
 * Domain: Users
 * ID: 0708
 */
exports.usersTool_0708 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0708:', error);
    throw error;
  }
};
