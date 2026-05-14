/**
 * Generated Tool: blocksTool_0382
 * Domain: Blocks
 * ID: 0382
 */
exports.blocksTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0382:', error);
    throw error;
  }
};
