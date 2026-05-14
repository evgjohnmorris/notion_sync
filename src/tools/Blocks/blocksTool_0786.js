/**
 * Generated Tool: blocksTool_0786
 * Domain: Blocks
 * ID: 0786
 */
exports.blocksTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0786:', error);
    throw error;
  }
};
