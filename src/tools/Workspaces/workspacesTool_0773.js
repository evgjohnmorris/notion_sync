/**
 * Generated Tool: workspacesTool_0773
 * Domain: Workspaces
 * ID: 0773
 */
exports.workspacesTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0773:', error);
    throw error;
  }
};
