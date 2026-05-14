/**
 * Generated Tool: workspacesTool_0833
 * Domain: Workspaces
 * ID: 0833
 */
exports.workspacesTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0833:', error);
    throw error;
  }
};
