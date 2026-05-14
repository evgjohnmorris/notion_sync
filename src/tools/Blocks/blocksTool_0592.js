/**
 * Generated Tool: blocksTool_0592
 * Domain: Blocks
 * ID: 0592
 */
exports.blocksTool_0592 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0592:', error);
    throw error;
  }
};
