/**
 * Generated Tool: workspacesTool_0722
 * Domain: Workspaces
 * ID: 0722
 */
exports.workspacesTool_0722 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0722:', error);
    throw error;
  }
};
