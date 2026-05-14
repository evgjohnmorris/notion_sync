/**
 * Generated Tool: workspacesTool_0724
 * Domain: Workspaces
 * ID: 0724
 */
exports.workspacesTool_0724 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0724:', error);
    throw error;
  }
};
