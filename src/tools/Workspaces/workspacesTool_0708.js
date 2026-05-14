/**
 * Generated Tool: workspacesTool_0708
 * Domain: Workspaces
 * ID: 0708
 */
exports.workspacesTool_0708 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0708:', error);
    throw error;
  }
};
