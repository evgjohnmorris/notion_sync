/**
 * Generated Tool: workspacesTool_0727
 * Domain: Workspaces
 * ID: 0727
 */
exports.workspacesTool_0727 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0727:', error);
    throw error;
  }
};
