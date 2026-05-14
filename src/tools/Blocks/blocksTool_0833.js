/**
 * Generated Tool: blocksTool_0833
 * Domain: Blocks
 * ID: 0833
 */
exports.blocksTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0833:', error);
    throw error;
  }
};
