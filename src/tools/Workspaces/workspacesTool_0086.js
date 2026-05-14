/**
 * Generated Tool: workspacesTool_0086
 * Domain: Workspaces
 * ID: 0086
 */
exports.workspacesTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0086:', error);
    throw error;
  }
};
